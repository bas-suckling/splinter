import React from 'react'
import { connect } from 'react-redux'


class TransactionDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: []
    }
  }


  

  getGroupMember = (id) => {
    return this.props.groupMembers.map(person => {
      if (person.groupMember_id == id) {
        return person.member_name
      }
    })
  }



  render() {
    return (

      <>
        {this.props.transactions.filter(transaction => transaction.transaction_name == this.props.name).map((debtors, i) => {
          if (debtors.total_contribution < 0) {
            return (
              <ul>
                <li key={i}>{this.getGroupMember(debtors.groupMember_id)} owes {name}  $ {(debtors.total_contribution / 100).toFixed(2) * -1}</li>
              </ul>
            )
          }
        })
        }
      </>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    transactions: reduxState.transactions,
    groupMembers: reduxState.groupMembers,
  }
}

export default connect(mapStateToProps)(TransactionDetails)