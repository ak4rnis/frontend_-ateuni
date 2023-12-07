const prod = {
    url: {
        API_URL: 'https://backendnodemysql-production.up.railway.app/api/'
    }
}

const dev = {
    url: {
        API_URL: 'https://backendnodemysql-production.up.railway.app/api/'
    }
}

// eslint-disable-next-line no-undef
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
