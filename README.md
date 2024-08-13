
<h1 align="center" >
  halfware app
</h1>

### Overview
The **Halfware App** is a custom application built on the Frappe framework designed to facilitate project cost estimation and management. This app includes a `chiffrage` Doctype, which allows users to estimate project costs and manage related details efficiently.

<br>

### Chiffrage Doctype overview :

| Tab | photo |
|-----|-------|
|Details                | ![screen1](https://github.com/user-attachments/assets/5ee1c6a7-bf03-4b58-8d12-2861b4eb48bf)|
|Feasibility Study      | ![screen2](https://github.com/user-attachments/assets/df12c7c1-3610-4674-a531-8b192a18e134)|
|Bill of Services       | ![screen3](https://github.com/user-attachments/assets/f80c1470-1537-4b3d-834d-5a40ea708b2e)|
|Bill of Material       | ![screen4](https://github.com/user-attachments/assets/26771f94-9c73-41b5-95cd-b2b2426bebde)|
|Bill of Resources      | ![screen5](https://github.com/user-attachments/assets/201f76bf-f243-4dd8-8ff5-b379e62fc1e5)|
|Other Additional Bills | ![screen6](https://github.com/user-attachments/assets/60e67352-b986-4a5c-8285-269ed5b3a745)|
|Dashboard (we still working on it)  | ![screen8](https://github.com/user-attachments/assets/525ae963-77ec-4e90-97a2-a80b399f576b)| 



<br>


### Features
- **Chiffrage Doctype**: A central feature of the app, designed for comprehensive project cost estimation.
  - **Tabs**:
    - **Details**: General project information.
    - **Feasibility Study**: (Étude d'existence) Assess the project's viability.
    - **Bill of Service**: Track and manage service-related costs.
    - **Bill of Material**: Itemize and calculate material expenses.
    - **Bill of Resources**: Manage resources and related costs.
    - **Other Additional Bills**: Include any supplementary bills that may affect the project.

- **Project Cost Calculation**: The app calculates the project cost based on material, service, and resource expenses, excluding additional bills. 
- **Billed Amount Calculation**: Determines the final billed amount by adding the project cost, additional bills, and a margin.


### Installation

To install the **Halfware App** on your Frappe or ERPNext instance:

```bash
$ bench get-app https://github.com/RAYANaouf/halfware
$ bench --site your-site install-app client1_app
```
### Usage
Once installed, you can access the chiffrage Doctype to start managing your project estimations. Here’s how you can use it:

- **1** : Create a new Chiffrage: Navigate to the chiffrage Doctype and fill in the details, feasibility study, bill of service, bill of material, bill of resource, and any additional bills.
- **2** : Calculate Costs: Review the automatically calculated project cost and billed amount based on your inputs.
- **3** : Manage Projects: Use the app to keep track of multiple projects and their associated costs.

### Contribution
We welcome contributions to improve this app! Feel free to fork the repository, make changes, and submit a pull request.

### License
This project is licensed under the MIT License.

###Contact
For any questions or support, please reach out to:

- **Author**: Rayan Aouf
- **Email** : rayanaouf1512@gmail.com


