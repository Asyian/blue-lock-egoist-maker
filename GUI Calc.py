import tkinter as tk
from tkinter import messagebox
from calc_logic import calculate

class CalcApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Calculator")
        self.root.geometry("300x400")

        self.num1 = tk.StringVar()
        self.num2 = tk.StringVar()
        self.result = tk.StringVar()

        self.create_widgets()

    def create_widgets(self):
        tk.Label(self.root, text="Number 1:").pack(padx=10, pady=10)
        tk.Entry(self.root, textvariable=self.num1).pack(padx=10, pady=10)

        tk.Label(self.root, text="Number 2:").pack(padx=10, pady=10)
        tk.Entry(self.root, textvariable=self.num2).pack(padx=10, pady=10)

        tk.Button(self.root, text="+", command=lambda: self.calculate("+")).pack(padx=10, pady=10)
        tk.Button(self.root, text="-", command=lambda: self.calculate("-")).pack(padx=10, pady=10)
        tk.Button(self.root, text="*", command=lambda: self.calculate("*")).pack(padx=10, pady=10)
        tk.Button(self.root, text="/", command=lambda: self.calculate("/")).pack(padx=10, pady=10)

        tk.Label(self.root, text="Result:").pack(padx=10, pady=10)
        tk.Entry(self.root, textvariable=self.result, state="readonly", font=("Arial", 14)).pack(padx=10, pady=10)

    def perform_calculation(self, op):
        try:
            a = float(self.num1.get())
            b = float(self.num2.get())
            result = calculate(op, a, b)
            self.result.set(result)
        except ValueError as e:
            messagebox.showerror("Error", e)

if __name__ == "__main__":
    root = tk.Tk()
    app = CalcApp(root)
    root.mainloop()