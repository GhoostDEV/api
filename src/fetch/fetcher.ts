const API_ENDPOINT = process.env.NODE_ENV === "production" ? "https://ghoost.dev" : "http://localhost:3000";

type ResponseType = {
    data: any;
    message: string;
};

const fetcher = async (input: RequestInfo, init?: RequestInit): Promise<ResponseType> => {
    const parameters = [];

    if(window?.localStorage) {
        for(let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if(!key) continue;

            const data = localStorage.getItem(key);
            if(!data) continue;

            parameters.push({ name: key, value: data });
        };
    };
    
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
  