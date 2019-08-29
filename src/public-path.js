const parsePath = window.location.pathname.split("/");
let serviceId = process.env.NODE_ENV === 'production' && parsePath.length > 2 ? parsePath[2] : process.env.NODE_ENV !== 'production' ? process.env.SERVICE_ID : null;
if (!serviceId) throw "Missing serviceId";
__webpack_public_path__ = `/app/${serviceId}/`;