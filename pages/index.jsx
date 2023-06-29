import Image from 'next/image'
import Header from './components/Header'
import { AnimeDataProvider } from './context/AnimeData'
import AnimeList from './components/AnimeList'

export default function Home() {
  return (
   <AnimeDataProvider>
   <Header />
   <AnimeList />
   </AnimeDataProvider>

  )
}
