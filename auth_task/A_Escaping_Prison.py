test_cases = int(input())
for _ in range(test_cases):
    n, h = map(int, input().split())
    rope = 0
    for _ in range(n):
        w, l = map(int, input().split())
        rope += max(w, l)
    if rope >= h:
        print("YES")
    else:
        print("NO")

