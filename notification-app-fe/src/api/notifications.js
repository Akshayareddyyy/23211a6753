import { Log } from "../../../logging-middleware/logger";

const TOKEN = import.meta.env.VITE_TOKEN;


export async function fetchNotifications(
    page = 1,
    limit = 10,
    type = ""
) {

    try {

        await Log(
            "info",
            "api",
            "Fetching notifications from server"
        );


        let url =
`http://4.224.186.213/evaluation-service/notifications?limit=${limit}&page=${page}`;

        if(type && type !== "All"){
            url += `&type=${type}`;
        }


        const response = await fetch(url,{

            headers:{
    Authorization:`Bearer ${TOKEN}`,
    "Content-Type":"application/json"
}
        });


        const data = await response.json();


        await Log(
            "info",
            "api",
            "Notifications fetched successfully"
        );


        return data;


    }
    catch(err){


        await Log(
            "error",
            "api",
            "Failed to fetch notifications"
        );


        return{

            notifications:[],
            total:0

        };

    }

}