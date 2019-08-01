import request from "@/utils/request";

export function index(query) {
  return request({
    url: "/clinic",
    method: "get",
    params: query
  });
}

export function show(id, includePermissions = false) {
  const query = {};
  if (includePermissions) {
    query.include = "Permissions";
  }
  return request({
    url: "clinic" + id,
    method: "get",
    params: query
  });
}

export function store(role) {
  const dataJSON = JSON.parse(JSON.stringify(role));
  return request({
    url: "clinic",
    method: "post",
    data: dataJSON
  });
}

export function update(role) {
  return request({
    url: "clinic/" + role.id,
    method: "patch",
    data: role
  });
}

export function destroy(role_id) {
  return request({
    url: "clinic/" + role_id,
    method: "delete"
  });
}

export function bulk(type, list) {
  const dataJSON = JSON.parse(JSON.stringify(list));
  return request({
    url: "clinic/bulk?type=" + type,
    method: "post",
    data: dataJSON
  });
}
