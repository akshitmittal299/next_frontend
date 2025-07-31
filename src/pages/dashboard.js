import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [products, setProducts] = useState([])
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('access')
    if (!token) return router.push('/login')

    axios.get('http://localhost:8000/api/v1/products/', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setProducts(res.data))
  }, [])

  return (
    <div>
      <h2>Amazon Product Listings</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <a href={p.link} target="_blank">{p.title} - {p.price}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
