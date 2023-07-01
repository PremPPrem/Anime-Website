import Image from 'next/image'
import { AnimeDataProvider } from './context/AnimeData'
import AnimeList from './components/AnimeList'
import Header from './components/Header'


export default function Home() {
  return (
 <AnimeDataProvider>
  <Header />
  <AnimeList />
 </AnimeDataProvider>
  )
}
