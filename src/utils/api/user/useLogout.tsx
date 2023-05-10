import axios from 'axios'
import useSWR from 'swr'
import apiConfig from '../../../apiConfig'

const fetcher = (url: string) => axios.delete(url).then((res) => res.data)

const useLogout = () =>
  useSWR(apiConfig.url.user.logout(), fetcher)

export default useLogout
