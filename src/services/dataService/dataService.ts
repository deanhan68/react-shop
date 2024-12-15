import axios, {AxiosRequestConfig, AxiosResponse, HttpStatusCode} from "axios"
import {inRange, isUndefined} from "lodash"
import {notification} from "antd"



export const getRequestConfig = (params: any, config: any) => {
    if (!isUndefined(params)) {
        if (!isUndefined(config)) {
            return { ...config, ...{ params: params } }
        }

        return { params: params }
    }

    return
}


export class DataService {
    private checkResponseStatus(response: AxiosResponse) {
        if (isUndefined(response)) {

            notification.error({ message: 'Response error', description: '', placement: 'topRight' })
        } else if (
            inRange(response.status, HttpStatusCode.BadRequest, HttpStatusCode.UnavailableForLegalReasons)
        ) {
            notification.error({ message: 'Request error', description: '', placement: 'topRight' })
        } else if (
            inRange(
                response.status,
                HttpStatusCode.InternalServerError,
                HttpStatusCode.NetworkAuthenticationRequired,
            )
        ) {
            notification.error({ message: 'Server error', description: '', placement: 'topRight' })
        }

    }
    public async Get(
        url: string,
        params?: Record<string, unknown>,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse> {
        const requestConfig = getRequestConfig(params, config)

        const response = await axios.get(url, requestConfig)

        this.checkResponseStatus(response)
        return response
    }
}
