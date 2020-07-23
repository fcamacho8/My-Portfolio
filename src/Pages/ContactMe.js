import React from "react";
import { Grid, Typography } from "@material-ui/core";

function Contact() {
    return (
        <>
        <Grid container direction="row" justify="center" alignItems="center" >
            <Grid item sm={6} >
                <div className="contactInfo">
                    <div>
                        <div className="col">
                            <form className="contactMe" name="contact" data-netlify="true">
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Name</label>
                                    <textarea className="form-control" name="name" id="exampleFormControlTextarea1" rows="1"></textarea>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    <small id="emailHelp" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea2">Message</label>
                                    <textarea className="form-control" name="message" id="exampleFormControlTextarea2" rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid item sm={6}>
                <div className="col-sm-10" style={{backgroundColor:"rgb(238, 194, 111)"}}>
                    <table className="table">
                        <tr>
                            <th>Name</th>
                            <td>
                                <p>Francisco Camacho</p>
                            </td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>
                                <a href="tel:+15205050373">(520) 505-0373</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>
                                <a href="mailto:fcamacho888@gmail.com">fcamacho888@gmail.com</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Github</th>
                            <td>
                                <a href="https://github.com/fcamacho8">github.com/fcamacho8</a>
                            </td>
                        </tr>
                        <tr>
                            <th>Linkedin</th>
                            <td>
                                <a href="https://www.linkedin.com/in/francisco-camacho-807a381a0/">Linkedin Profile</a>
                            </td>
                        </tr>
                        <tr>
                            <th>.</th>
                            <td>
                                <a href="https://docs.google.com/document/d/1XmxhWHLNIL8jUIgJ_Vu0oswHh2ljmv_WEAf3m5WvCAA/edit#/">Resume</a>
                            </td>
                        </tr>
                    </table>
                </div>

            </Grid>

        </Grid>
        </>
    )
}

export default Contact