from collections import deque

def get_value(card):
    if card == 'A':
        return 1
    if card == 'J':
        return 11
    if card == 'Q':
        return 12
    if card == 'K':
        return 13
    return int(card)

def arrange_cards(cards, priorities):
    pmap = {s: i for i, s in enumerate(priorities)}
    return sorted(cards, key=lambda c: (c[0], -pmap[c[1]]))

n = int(input())

p1_cards = []
p2_cards = []

for _ in range(n):
    line = input().split()
    c1, s1, c2, s2 = line[0], int(line[1]), line[2], int(line[3])
    
    p1_cards.append((get_value(c1), s1))
    p2_cards.append((get_value(c2), s2))

priorities = list(map(int, input().split()))

p1_cards = arrange_cards(p1_cards, priorities)
p2_cards = arrange_cards(p2_cards, priorities)

deck1 = deque(p1_cards)
deck2 = deque(p2_cards)

hand = []
turn = 1

pmap = {s: i for i, s in enumerate(priorities)}

for _ in range(1000000):
    if turn == 1:
        if not deck1:
            break
        card = deck1.popleft()
    else:
        if not deck2:
            break
        card = deck2.popleft()
    
    if not hand:
        hand.append(card)
        turn = 3 - turn
    else:
        top = hand[-1]
        
        if card[0] == top[0] and pmap[card[1]] < pmap[top[1]]:
            hand.append(card)
            won = arrange_cards(hand, priorities)
            hand = []
            
            if turn == 1:
                deck1.extend(won)
            else:
                deck2.extend(won)
        else:
            hand.append(card)
            turn = 3 - turn

if not deck1 and not deck2:
    print("TIE")
elif deck1:
    print("WINNER")
else:
    print("LOSER")
