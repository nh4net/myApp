import threading, queue, time
  from datetime import datetime

  data_q = queue.Queue(maxsize=1000)
  stop_event = threading.Event()

  def producer(sensor_name, read_fn, period):
      next_t = time.monotonic()
      while not stop_event.is_set():
          ts = datetime.now().isoformat(timespec="milliseconds")
          try:
              value = read_fn()
              data_q.put((ts, sensor_name, value))
          except Exception as e:
              print(f"[ERR] {sensor_name}: {e}")
          next_t += period
          time.sleep(max(0, next_t - time.monotonic()))