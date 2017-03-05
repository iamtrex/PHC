import React, { PropTypes } from 'react'
import {
  Button,
  Tooltip,
  OverlayTrigger,
  Glyphicon,
  Row,
  Col,
} from 'react-bootstrap'
import classnames from 'classnames'

import 'react-select/dist/react-select.css'
import classes from './CheckOutForm.scss'

const ServicesPartial = (props) => {
  let { services } = props.fields

  return (
    <Row>
      <Col xs={12}>
        <label className={classes.fieldName}>Services</label>
        <Row>
          {services.map(service => (
            <Col xs={12} sm={6} className={classes.inputGroup} key={service}>
              <label>{service}</label>
              <Row>
                <Col xs={12}>
                  <label>
                    <input
                      {...service}
                      type="radio"
                      value="Applied"
                      checked={service.value === 'Applied'}
                    />
                   Applied
                  </label>
                </Col>

                <Col xs={12}>
                  <label>
                    <input
                      {...service}
                      type="radio"
                      value="Received"
                      checked={service.value === 'Received'}
                    />
                   Received
                  </label>
                </Col>

                <Col xs={12}>
                  <label>
                    <input
                      {...service}
                      type="radio"
                      value="Drop In"
                      checked={service.value === 'Drop In'}
                    />
                    Drop In
                  </label>
                </Col>

                <Col xs={12}>
                  <label>
                    <input
                      {...service}
                      type="radio"
                      value="None"
                      checked={service.value === 'None'}
                    />
                   None
                  </label>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export const CheckOutForm = (props) => {
  let {
    fields: {
      services,
      // satisfaction,
    },
    handleSubmit,
    requesting,
    currentAccount,
    errors,
    submitFailed,
  } = props

  const _onSubmit = () => {
    const fields = props.fields
    const newFields = {}

    for (let field in fields) {

    }

    props.updateInfo(newFields, currentAccount && currentAccount.id)
  }

  const _onClear = () => {
    props.clearInfo()
  }

  return (
    <div>
      <ServicesPartial fields={{services}} />
    </div>
  )
}

CheckOutForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  requesting: PropTypes.bool.isRequired,
  updateInfo: PropTypes.func.isRequired,
  clearInfo: PropTypes.func.isRequired,
}

export default CheckOutForm
