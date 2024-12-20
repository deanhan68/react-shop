import { Avatar, List, Skeleton } from "antd"

import './style.css'

export const CustomSkeleton = () => {
    return (
        <Skeleton loading={true} active avatar>
              <List.Item.Meta
                avatar={<Avatar src={'item.avatar'} />}
                title={<a href={'href'}>{'title'}</a>}
                description={'item.description'}
              />
              {'item.content'}
            </Skeleton>
    )
}