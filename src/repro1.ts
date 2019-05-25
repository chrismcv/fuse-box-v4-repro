import { HubConnectionBuilder } from "@aspnet/signalr";

export const hub = new HubConnectionBuilder()
  .withUrl("https:/localhost:4444")
  .build();
