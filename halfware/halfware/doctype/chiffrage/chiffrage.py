# Copyright (c) 2024, rayan aouf  and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class chiffrage(Document):


	def before_save(self):
            price = 0
            for hardware in self.get("hardware"):
                hardware.before_save()
                price += hardware.getTotalPrice()

            for service  in self.get("service"):
                service.before_save()
                price += service.getTotalPrice()

            self.estimated_cost = price
