const axios = require('axios');

const baseUrl = "http://ec2-16-16-205-202.eu-north-1.compute.amazonaws.com:3000";

const test = async () => {
    try {
        console.log("Testing getting the about");
        console.log("-------------------------");

        let url = `${baseUrl}/about/`;
        let response = await axios.get(url);
        console.log("url=" + url);
        console.log("data.status_code=" + response.status);
        console.log("data.content=" + JSON.stringify(response.data));
        console.log("firstname=" + response.data[0].firstname);
        console.log("lastname=" + response.data[0].lastname);
        console.log("id=" + response.data[0].id);

        console.log("\nTesting getting the report - 1");
        console.log("------------------------------");

        url = `${baseUrl}/report/?user_id=123123&year=2024&month=3`;
        response = await axios.get(url);
        console.log("url=" + url);
        console.log("data.status_code=" + response.status);
        console.log("data.content=" + JSON.stringify(response.data));
        console.log("dinner=" + JSON.stringify(response.data.dinner));

        console.log("\nTesting adding calorie consumption");
        console.log("----------------------------------");

        url = `${baseUrl}/addcalories/`;
        response = await axios.post(url, {
            user_id: 123123,
            year: 2024,
            month: 4,
            day: 2,
            description: 'milk 9',
            category: 'lunch',
            amount: 8
        });
        console.log("url=" + url);
        console.log("data.status_code=" + response.status);
        console.log("data.content=" + JSON.stringify(response.data));

        console.log("\nTesting getting the report - 2");
        console.log("------------------------------");

        url = `${baseUrl}/report/?user_id=123123&year=2024&month=4`;
        response = await axios.get(url);
        console.log("url=" + url);
        console.log("data.status_code=" + response.status);
        console.log("data.content=" + JSON.stringify(response.data));
        console.log("dinner=" + JSON.stringify(response.data.dinner));
    } catch (error) {
        console.error("Problem", error);
    }
};

test();