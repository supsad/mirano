import { API_URL } from '@/constants';

const isResponseStatusFailed = ({ ok, status, statusText }, errMessage) => {
  if (!ok) {
    throw new Error(
      `${ status }: ${ statusText } \
    ${ errMessage ? errMessage : '' }`
    );
  }
};

export default async function fetchData(endpoint, params, errMessage) {
  try {
    const response = await fetch(`${ API_URL }${ endpoint }`, params);

    isResponseStatusFailed(response, errMessage);

    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
