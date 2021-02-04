const API_ENDPOINT = process.env.NODE_ENV === "production" ? "https://ghoost.dev" : "http://localhost:3000";

type ResponseType = {
    data: any;
    message: string;
};

const fetcher = async (input: RequestInfo, init?: RequestInit): Promise<ResponseType> => {
    const parameters = [];

    console.log(window.localStorage);
    if(window?.localStorage) {
        console.log(localStorage.length)
        for(let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            console.log(key);
            if(!key) continue;
        
            const data = localStorage.getItem(key);
            console.log(data);
            if(!data) continue;

            parameters.push({ name: key, value: data });
            console.log(parameters);
        };
    };

    console.log(parameters);
    console.log(parameters.length > 0 ? {
        ...init,
        headers: {
            ...init?.headers,
            cookie: join(parameters),
        },
    } : init);
    
    const res = await fetch(`${API_ENDPOINT}/api${input}`, parameters.length > 0 ? {
        ...init,
        headers: {
            ...init?.headers,
            cookie: join(parameters),
        },
    } : init);
    if(!res.ok) throw new Error("Ghoost's servers are down or you don't have internet connection. Try again later!");

    const data = await res.json();
    if (data.error) throw new Error(data?.message);

    return data;
};

const join = (parameters: ({ name: string, value: string })[]) => {
    return parameters.map((el) => `${el.name}=${el.value}`).join("; ");
};

export default fetcher;
  