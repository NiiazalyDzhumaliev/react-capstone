import { getApiHash } from 'marvel-api-hash-generator';

const timeStamp = 1;
const privateKey = 'c9384891527cc3bd72cab81dce560d18174a46bb';
const publicKey = '14946262ad54655fac24826eeceeb49b';
const hashValue = getApiHash(timeStamp, privateKey, publicKey);

export { timeStamp, publicKey, hashValue };
