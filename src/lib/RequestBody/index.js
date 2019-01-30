import React, { Component } from 'react'
import axios from 'axios'

class RequestBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      query: 'https://graph.microsoft.com/v1.0/me/'
    }
  }

  sendRequest() {
      axios.get(`https://proxy.apisandbox.msdn.microsoft.com/svc?url=${encodeURIComponent(this.state.query)}`, {
        headers: {
          Authorization: 'Bearer {token:https://graph.microsoft.com/}'
        }
      })
        .then(res => {
          console.log(JSON.stringify(res.data))
          this.setState({ result: JSON.stringify(res.data) })
        })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron  hero-spacer">
          <div>
            <p>{this.state.query}</p>
            <button onClick={() => this.sendRequest()}>Send</button>
          </div>
          <div className="input-group">
            <div className="field span3" >
              <textarea value={this.state.result} className="form-control" wrap='on' rows="20" cols="100" ></textarea>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export { RequestBody }
