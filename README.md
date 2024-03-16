# shared-clipboard
I mostly use this myself.

Share clipboard content between multiple devices; Works when the devices are connected to the same network.

# Usage
1. Clone the repo
2. Run `npm install` (on all devices)
3. On one device, run `npm run start`
4. On the other device, run `npm run client`
5. To find the page, where you click the button to share the contents of your clipboard to all devices,
you need to find the IP of your device and open the following URL: `http://<local network IP of the device>:42069/`
(replace `<local network IP of the device>` with the IP of your device).
Then click the button to share the contents of your clipboard
