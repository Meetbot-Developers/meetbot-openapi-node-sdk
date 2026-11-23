export class MeetbotError extends Error {
  constructor(message: string, options?: ErrorOptions) { super(message, options); this.name = new.target.name; }
}

export class MeetbotHttpError extends MeetbotError {
  constructor(readonly statusCode: number, readonly responseBody: string, readonly headers: Record<string, string | string[] | undefined>) {
    super(`Meetbot HTTP ${statusCode}`);
  }
}

export class MeetbotApiError extends MeetbotError {
  constructor(readonly code: number | undefined, message: string, readonly traceId: string | undefined, readonly responseBody: string) { super(message); }
}
