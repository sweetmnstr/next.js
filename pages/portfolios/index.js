import AppNavbar from "../../components/Navbar";
import axios from 'axios'

const FetchPortfolios = () =>{
    const query = `query Portfolios{
         portfolios{
                  _id
                  title
                  description 
                  company 
                  companyWebsite 
                  location 
                  jobTitle
                  }
                  }`
    return axios.post('http://localhost:3000/graphql', {query})
        .then(({data: graph}) => graph.data)
        .then(data => data.portfolios)

}
const Portfolios = ({portfolios}) =>{


    return(<>
            <div className="container">
                <section className="section-title">
                    <div className="px-2">
                        <div className="pt-5 pb-4">
                            <h1>Portfolios</h1>
                        </div>
                    </div>
                </section>
                {JSON.stringify(portfolios)}
                <section className="pb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card subtle-shadow no-border">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text fs-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="card-footer no-border">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card subtle-shadow no-border">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text fs-2 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="card-footer no-border">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card subtle-shadow no-border">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text fs-2 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="card-footer no-border">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

Portfolios.getInitialProps = async () =>{
    const portfolios = await FetchPortfolios()
    return {portfolios}
}

export default Portfolios;
