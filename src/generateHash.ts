import keccak256 from "keccak256";

export default (data: string): string => {
  return keccak256(data).toString("hex");
}