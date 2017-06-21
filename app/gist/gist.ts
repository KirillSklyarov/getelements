import { Owner } from './owner'

export class Gist {
  url: string
  forksUrl: string
  id: string
  description: string
  public: boolean
  owner: Owner
  user: null
  files: any
  truncated: boolean
  comments: number
  commentsUrl: string
  htmlUrl: string
  gitPullUrl: string
  gitPushUrl: string
  createdAt: string
  updatedAt: string
}
