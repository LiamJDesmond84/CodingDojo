# STILL CONFUSED WITH SUBCLASSES?

class Store:
    productList = []
    storeName = "Vons"
    def __init__(self,name):
        self.name = name
    def add_product(self, new_product):
        self.productList.append(new_product)
    def sell_product(self, id):
        # self.productList.remove(id)
        del self.productList[id]
    def inflation(self,percent_increase):
        cat.price += percent_increase
    def set_clearance(self, price, percent_discount):
        cat.price -= percent_discount

class Product(Store):
    # productName = ("MeowMix")
    # price = 1.99
    # category = {"Meowmix" : 1.99}
    def __init__(self,productName,price,category):
        self.productName = productName
        self.price = price
        self.category = category
    def inflation(self,percent_increase):
        super().inflation(percent_increase)
    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.price += percent_change
        else:
            self.price -= percent_change
    def print_info(self):
        print(self.productName)
        print(self.category)
        print(self.price)

liam = Store("Liam")
liam.add_product("catnip")
liam.add_product(7)
print(Store.productList)
liam.sell_product(0)
print(Store.productList)


cat = Product("Friskys", 1.99, "catfood")
cat.update_price(.2,True)
liam.set_clearance("MeowMix", 0.4)
liam.inflation(0.01)
cat.print_info()