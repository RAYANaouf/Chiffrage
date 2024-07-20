# Copyright (c) 2024, rayan aouf  and contributors
# For license information, please see license.txt


import frappe
from frappe.model.document import Document


class ChiffrageHardware(Document):

        def before_save(self):
            self.total_price = self.unit_price * self.quantity


        def getTotalPrice(self):
            return self.total_price
