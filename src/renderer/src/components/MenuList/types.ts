export interface Props {
  iconList: IconData[]
}

export interface IconData {
  id: number
  name: string
  active: boolean
  hover?: boolean
}
