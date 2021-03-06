import { useEffect, useState } from 'react'

import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'

import Loading from 'react-simple-loading'

interface Repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [])

  return (
    <section className='repository-list'>
      <h1>
        Lista de Repositórios <a href=''> Rocketseat</a>
      </h1>

      {!repositories.length && (
        <Loading color={'rgb(219, 97, 97)'} className='loading' />
      )}

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ul>
    </section>
  )
}
