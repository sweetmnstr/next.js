const express = require('express')
const next = require('next')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const app = express()


    const data = {
      portfolios:  [
            {
                _id: "213jn654b76",
                title: "Job in USA",
                company:"American Tabaco",
                companyWebsite:"www.google.com",
                location:"USA",
                description:"It was very nice experience",
                jobTitle: "Chef",
                startDate: "01/01/2016",
                endDate: "01/01/2018",
                isCurrentlyEmployed: true
            },
            {
                _id:"2213das4b76",
                title: "Job in Ukraine",
                company:"NaftoGas",
                companyWebsite:"www.google.com",
                location:"Ukraine",
                description:"It was very awful experience",
                jobTitle: "Developer",
                startDate: "01/01/2016",
                endDate: "01/01/2018",
                isCurrentlyEmployed: false
            },
            {
                _id:"1254bjk752jn",
                title: "Job in Canada",
                company:"CanadianGiants",
                companyWebsite:"www.google.com",
                location:"Canada",
                description:"It was very great experience",
                jobTitle: "Manager",
                startDate: "01/01/2016",
                endDate: "01/01/2018",
                isCurrentlyEmployed: true
               }
]
}


    const schema = buildSchema(`
    type Portfolio{
    _id:ID
    title:String
    description:String
    company:String
    companyWebsite:String
    location:String
    jobTitle:String
    startDate: String
    endDate: String
    isCurrentlyEmployed:Boolean
    }
    type Query{
    hello: String
    portfolio:Portfolio
    portfolios:[Portfolio]
    }
    `)

    const root = {
        hello: () => "Hello World",
        portfolio: () => data.portfolios[0],
        portfolios: () => data.portfolios
    }


    app.use('/graphql', graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    })
    )

    app.all('*', (req, res) => {
        return handle(req, res)
    })

    app.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
