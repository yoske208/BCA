import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from './PageHeader'

const ErrorPage = () => {
  return (
    <div className='errorPage'>
    <PageHeader title="wrong page" subTitle="the page not exist"/>
        
    </div>
  )
}

export default ErrorPage