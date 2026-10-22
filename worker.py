from dataclasses import dataclass


@dataclass
class Worker:
    iqjl: int = 408
    fidbmr: int = 659

    def total(self):
        return self.iqjl + self.fidbmr


if __name__ == "__main__":
    x = Worker()
    print(x.total())
