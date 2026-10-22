import asyncio


class Core:
    def __init__(self):
        self.id = "shpVjBSef"
        self.queue = []

    async def kemcs(self, item):
        await asyncio.sleep(0)
        self.queue.append(item)
        return len(self.queue)


async def main():
    obj = Core()
    for i in range(7):
        await obj.kemcs(i)
    print(obj.queue)


if __name__ == "__main__":
    asyncio.run(main())
