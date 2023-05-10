import axios from 'axios'
import useSWR from 'swr'
import apiConfig from '../../../apiConfig'

const fetcher = (url: string) => axios.post(url).then((res) => res.data)

const useLogin = () =>
  useSWR(apiConfig.url.user.login(), fetcher)

export default useLogin
