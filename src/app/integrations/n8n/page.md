---
title: n8n Cloud
description: Five steps to automate with n8n—no server required.
---

# n8n Cloud

Five steps to automate with n8n—no server required.

1. **SIGN UP & LOGIN**  
   Go to [n8n.cloud](https://n8n.cloud), create an account, and log in.

2. **NEW WORKFLOW**  
   Click `New Workflow` — your blank canvas appears instantly.

3. **ADD HTTP REQUEST**  
   Drag the `HTTP Request` node onto the canvas.

4. **CONFIGURE NODE**  
   ```text
   • URL: https://service.textretriever.com/api/<service>
   • Method: POST
   • Authentication: Header → Authorization: Bearer <YOUR_TOKEN>
   • Body Content Type: multipart/form-data
   • Parameter “file”: choose “Binary Property” → data

5. **EXECUTE & ACTIVATE**
   Click `Execute Node` to test with your file, then toggle `Active` to run on schedule.
