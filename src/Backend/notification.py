import time
from plyer import notification

if __name__ == '__main__':
    while True:
        notification.notify(
            title='ALERT!!!!',
            message='R1 - FastEthernet0/0 is down',
            timeout=10
        )

        time.sleep(5)
