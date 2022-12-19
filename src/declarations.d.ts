declare module "*.png";
declare module "*";
declare module "*.svg" {
  const content: string;
  export default content;
}
