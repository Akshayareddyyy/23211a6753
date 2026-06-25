const TOKEN = import.meta.env.VITE_TOKEN;

const BASE_URL = "http://4.224.186.213/evaluation-service/logs";

export async function Log(level, packageName, message) {
    try {

        const response = await fetch(BASE_URL, {
            method: "POST",

            headers: {
                Authorization: `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                stack: "frontend",
                level,
                package: packageName,
                message
            })
        });

        const data = await response.json();

        console.log("Logged Successfully:", data);

        return data;

    } catch (err) {

        console.error("Logging Failed:", err);

    }
}