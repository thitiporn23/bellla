import React from 'react'
import MainLayout from '../layouts/MainLayout';
import Button from '../Button';
const Home = () => {
  return (
    <MainLayout>
      <div className="mt-4 p-5 bg-info text-dark">
        <h1>Hi Baby</h1>
        <p>Lorem ipsum...</p>
      </div>
      <Button text="Danger" color="danger"/>
      <Button text="Information" color="success"/>
      <Button text="Primary" color="primary"/>
    </MainLayout>
  )
}

export default Home