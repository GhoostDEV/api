type ResponseType = {
    data: any;
    message: string;
};

const fetcher = async (input: RequestInfo, init?: RequestInit): Promise<ResponseType> => {
    const res = await fetch(`/api${input}`, init);
    if(!res.ok) throw new Error("Ghoost's servers are down or you don't have internet connection. Try again later!");

    const data = await res.json();
    if (data.error) throw new Error(data?.message);

    return data;
};

export default fetcher;
  