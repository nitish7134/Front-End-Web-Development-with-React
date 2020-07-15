import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderComments({ selectedDishComments }) {

    if (selectedDishComments != null) {
        const Comments = selectedDishComments.map((selectedDishComment) => {
            return (
                <div>
                    <li>
                        <p>{selectedDishComment.comment}</p>
                        <p>--- {selectedDishComment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(selectedDishComment.date)))}</p>
                    </li>
                </div>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">

                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {Comments}
                </ul>

            </div>
        );
    } else {
        return (
            <div>

            </div>
        );
    }
}

function RenderDish({ dish, comments }) {

    if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <RenderComments selectedDishComments={comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div>

            </div>
        );
    }
}

const DishDetail = (props) => {
    console.log("DishDetail" + props.dish.name)
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderDish dish={props.dish}
                    comments={props.comments} />
            </div>
        </div>
    );
}

export default DishDetail;