import {Tabs} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {ItemMenuTabModel} from "../models/ItemMenuTabModel";


export default function MenuTab(props: {list:ItemMenuTabModel[]}){



    var navigate= useNavigate()

    return(


    <Tabs defaultValue={window.location.pathname}>
        <Tabs.List  justify="center">
            {props.list.map((item)=>(
                <Tabs.Tab className={'hover:text-red-500'}  key={item.path} value={item.path} onClick={() => {
                    navigate(item.path)


                }}>
                    {item.title}
                </Tabs.Tab>


            ))}

        </Tabs.List>

    </Tabs>
    )
}













