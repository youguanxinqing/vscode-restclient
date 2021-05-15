const R = require("ramda")

const get = (obj: object, path: string): any => {
    const points = path.split(".")
    return R.path(points, obj)
}


const set = (obj: object, path: string, val: any): object => {
    const points = path.split(".")
    return R.assocPath(points, val, obj)
}

const del = (obj: object, path: string): object => {
    const points = path.split(".")
    return R.dissocPath(points, obj)
}

const gjson = {
    get,
    set,
    del,
}

export default gjson