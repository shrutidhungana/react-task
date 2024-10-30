import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimaryButton from './components/Buttons/PrimaryButton'
import SecondaryButton from './components/Buttons/SecondaryButton'
import Pagination from './components/Pagination'
import Loader from './components/Loader'
import CircleSkeleton from './components/Skeleton/CircularSkeleton'
import RectangleSkeleton from './components/Skeleton/RectangularSkeleton'
import Card from './components/Card/Card'

function App() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimaryButton />
      <SecondaryButton />
      <Pagination />
      <Loader loading={loading} message="Fetching products..." />
      <CircleSkeleton />
      <RectangleSkeleton />
      <div className="flex flex-wrap justify-center gap-4">
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App
