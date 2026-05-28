import csv
  with open("sensor.csv", "a", newline="") as f:
      w = csv.writer(f)
      while not stop_event.is_set():
          ts, name, val = data_q.get()
          w.writerow([ts, name, val])
          f.flush()  # 전원 차단 대비 즉시 디스크 반영



