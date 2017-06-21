import { Owner } from './owner'

export class Gist {
  url: string
  forks_url: string
  id: string
  description: string
  public: string
  owner: Owner
  user: null
  files: any
  truncated: boolean
  comments: number
  comments_url: string
  html_url: string
  git_pull_url: string
  git_push_url: string
  created_at: string
  updated_at: string
}
