import { GET_INITIAL_DATA, SET_APP_LOADING } from "../actionTypes";

const contentful = {
  space: "vcv3zozx71ts",
  token: "9ceiESlu5k0_Ebe6ZjWbkstASj5gq-mEw9inrdkNCLg",
  env: "master",
};

export const getInitialData = () => async (dispatch) => {
  console.log("hello from function");
  try {
    setAppLoading();

    const res = await fetch(
      `https://cdn.contentful.com/spaces/${contentful.space}/environments/${contentful.env}/entries?access_token=${contentful.token}`
    );
    const data = await res.json();

    const assets = data.includes.Asset.map((asset) => ({
      ...asset.fields,
      id: asset.sys.id,
    }));

    const tracks = data.items
      .filter((item) => item.sys.contentType.sys.id === "track")
      .map((item) => ({
        ...item.fields,
        id: item.sys.id,
      }));

    const series = data.items
      .filter((item) => item.sys.contentType.sys.id === "series")
      .map((item) => ({
        ...item.fields,
        id: item.sys.id,
      }));

    // console.log(data);

    dispatch({
      type: GET_INITIAL_DATA,
      payload: {
        tracks,
        assets,
        series,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const setAppLoading = () => {
  console.log("Setting app to loading");
  return {
    type: SET_APP_LOADING,
  };
};
