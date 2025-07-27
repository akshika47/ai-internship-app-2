# Funny AI Script

A simple Python script that calls the OpenAI API to generate something funny about AI.

## Setup

1. **Activate the virtual environment:**
   ```bash
   source venv/bin/activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set your OpenAI API key:**
   ```bash
   export OPENAI_API_KEY='your-openai-api-key-here'
   ```
   
   Or add it to your shell profile for persistence:
   ```bash
   echo 'export OPENAI_API_KEY="your-openai-api-key-here"' >> ~/.zshrc
   source ~/.zshrc
   ```

## Usage

Simply run the script:

```bash
python funny_ai_script.py
```

The script will call the OpenAI API and display something funny about AI!

## Notes

- Uses GPT-3.5-turbo model for cost-effectiveness
- Requires a valid OpenAI API key
- Error handling included for common issues 